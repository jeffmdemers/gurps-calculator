import { Component, OnInit, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HikingModel, Hiker } from 'src/app/shared/models/hiking.model';
import { HikingCalculatorMode, HikingWeather, TerrainQuality, RoadQuality, RulesMode } from 'src/app/shared/models/hiking.model'
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ReturnStatement } from '@angular/compiler';
import { async } from 'q';
import { promise } from 'protractor';
import { distinctUntilChanged } from 'rxjs/operators';
import { pipe } from 'rxjs'

// interaces
export interface Option {
  value: any;
  viewValue: string;
}

// needed enumerables from Hiking Model
export {
  HikingCalculatorMode,
  HikingWeather,
  TerrainQuality,
  RulesMode
};

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.scss'],
})

export class HikingComponent implements OnInit {
  renderResults: boolean;
  hikingForm: FormGroup;
  result: any;
  hikerList: FormArray = this.formBuilder.array([]);

  // meant to convert part of the form to Hiker Objects
  converter: any;
  panelOpenState = false;

  // enum interfaces
  HikingCalculatorMode: Option[] = [
    { value: HikingCalculatorMode.Distance, viewValue: 'Distance' },
    { value: HikingCalculatorMode.Time, viewValue: 'Time' },
  ];
  HikingWeather: Option[] = [
    { value: HikingWeather.Nominal, viewValue: 'Nominal' },
    { value: HikingWeather.Rain, viewValue: 'Rain' },
    { value: HikingWeather.AnkleDeepSnow, viewValue: 'Ankle Deep Snow' },
    { value: HikingWeather.VeryDeepSnow, viewValue: 'Very Deep Snow' },
    { value: HikingWeather.Ice, viewValue: 'Ice' },
  ];
  TerrainQuality: Option[] = [
    { value: TerrainQuality.VeryBad, viewValue: 'Very Bad' },
    { value: TerrainQuality.Bad, viewValue: 'Bad' },
    { value: TerrainQuality.Average, viewValue: 'Average' },
    { value: TerrainQuality.Good, viewValue: 'Good' },
    { value: TerrainQuality.SolidIce, viewValue: 'Solid Ice' },
  ];
  RoadQuality: Option[] = [
    { value: RoadQuality.Bad, viewValue: 'Bad' },
    { value: RoadQuality.Average, viewValue: 'Average' },
    { value: RoadQuality.Good, viewValue: 'Good' },
  ]
  RulesMode: Option[] = [
    { value: RulesMode.BasicSet, viewValue: 'Basic Set' },
    { value: RulesMode.HighTech, viewValue: 'High Tech' },
    { value: RulesMode.WildernessAdventures, viewValue: 'Wilderness Adventures' }
  ];

  constructor(private formBuilder: FormBuilder) { }

  // table for hiker interface
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['move', 'skill', 'will', 'extraEffort', 'equipment', 'rollResult', 'delete'];
  columnsToDisplay: string[] = ['move', 'skill', 'equipment', 'delete']
  dataSource = new MatTableDataSource(this.hikerList.controls);

  ngOnInit() {
    this.displayedColumns = this.columnsToDisplay;
    this.hikingForm = this.formBuilder.group({
      ruleSet: [{value: RulesMode.BasicSet, disabled:true}],
      useSkis: false,
      useIceSkates: false,
      terrainQuality: TerrainQuality.Average,
      weather: HikingWeather.Nominal,
      offRoad: true,
      // type of road to be added later
      roadQuality: RoadQuality.Average,
      leadership: false,
      mode: HikingCalculatorMode.Distance,
      goal: 10,
      hikerList: this.hikerList,
    });
    this.onChanges();
  }

  get f() { return this.hikingForm.controls }
  get hikers() { return this.hikingForm.get('hikerList') as FormArray }

  onSubmit() {
    this.converter = this.f.hikerList.value.map(hiker =>
      new Hiker(
        hiker.hikingSkill,
        hiker.useIceSkates,
        hiker.useSkis,
        hiker.maximumFatiguePoints,
        hiker.fatiguePoints,
        hiker.fatigueRestingRecoveryRate,
        hiker.fatigueConstantRecoveryRate,
        hiker.basicMove,
        hiker.cumulativeBonus,
        hiker.name,
        hiker.will,
        hiker.extraEffort
      ));
    this.result = new HikingModel(
      this.f.ruleSet.value,
      this.f.terrainQuality.value,
      this.f.weather.value,
      this.f.offRoad.value,
      this.f.roadQuality.value,
      this.f.leadership.value,
      this.converter,
      this.f.mode.value,
      this.f.goal.value,
    ).Calculate();
    this.result ? this.renderResults = true : this.renderResults = false;
  }
  onChanges() {
    this.hikingForm.valueChanges.pipe(distinctUntilChanged(
      (a, b) => JSON.stringify(a) === JSON.stringify(b)
    )).
    subscribe( field => {
      if (field.terrainQuality === TerrainQuality.SolidIce) {
        this.hikingForm.get( 'weather' ).disable();
      } else if (field.terrainQuality !== TerrainQuality.SolidIce) {
        this.hikingForm.get('weather').enable();
      }
      if (field.offRoad) {
        this.hikingForm.get('roadQuality').disable();
        this.hikingForm.get('terrainQuality').enable();
      } else if (!field.offRoad) {
        this.hikingForm.get('roadQuality').enable();
        this.hikingForm.get('terrainQuality').disable();
      }
    });
  }
  //table functions
  addRow() {
    const row = this.formBuilder.group({
      hikingSkill: 10,
      basicMove: 5,
      useIceSkates: false,
      useSkis: false,
      will: 10,
      extraEffort: false,
      cumulativeBonus: 1,
    });
    this.hikerList.push(row);
    this.hikerList.value.length === 1 ? undefined :
    this.table.renderRows();
  }
  hideEquipment() {
    this.hikingForm.value.weather === 2 ||
    this.hikingForm.value.weather === 3 ||
    this.hikingForm.value.weather === 4 ||
    this.hikingForm.value.terrainQuality === 4 ?
    this.columnsToDisplay = this.columnsToDisplay.filter(column => column !== 'equipment') :
    this.columnsToDisplay.push('equipment') ;
  }
  deleteEntry(index) {
    this.hikerList.controls.splice(index, 1);
    this.table.renderRows();
  }
}
