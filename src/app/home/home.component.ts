import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { LaunchService } from '../launch.service';
import { IFilterOption } from '../interface/filter-option.interface';
import { IProject } from '../interface/project.interface';
import { ISkeleton } from '../interface/skeleton.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class HomeComponent implements OnInit {

  private _query: string = '?limit=100';
  private _filterObj: { year: number, launch: boolean, land: boolean } = {} as any;
  private _isStoregeExists: boolean = false;
  private _window: Window;
  private readonly PATH = 'path';
  private readonly LAND = 'land';
  private readonly LAUNCH = 'launch';
  private readonly YEAR = 'year';

  public skeleton: ISkeleton = { yes: true };
  public isLoading: boolean = false;
  public projects: Array<IProject>;
  public landOpt: IFilterOption[] = [
    {
      value: 'True',
      isActive: false
    },
    {
      value: 'False',
      isActive: false
    }
  ];
  public launchOpt: IFilterOption[] = [
    {
      value: 'True',
      isActive: false
    },
    {
      value: 'False',
      isActive: false
    }
  ];
  public years: IFilterOption[] = [
    { value: 2006, isActive: false }, { value: 2007, isActive: false },
    { value: 2008, isActive: false }, { value: 2009, isActive: false },
    { value: 2010, isActive: false }, { value: 2011, isActive: false },
    { value: 2012, isActive: false }, { value: 2013, isActive: false },
    { value: 2014, isActive: false }, { value: 2015, isActive: false },
    { value: 2016, isActive: false }, { value: 2017, isActive: false },
    { value: 2018, isActive: false }, { value: 2019, isActive: false },
    { value: 2020, isActive: false }
  ];


  constructor(private _launchService: LaunchService,
    private _location: Location) {
    this._window = this._launchService.getNativeWindow();
  }

  ngOnInit() {
    this._setSkeletons();
    this._storageStatus();
    this._getLaunchInfo();

  }

  private _setSkeletons() {
    this.projects = new Array(8).fill({});
  }

  private _storageStatus() {

    if (this._window.localStorage.getItem(this.PATH) !== null) {
      this._isStoregeExists = true;
    } else {
      this._isStoregeExists = false;
    }
  }

  private _getLaunchInfo() {
    this.isLoading = true;
    const query = this._getQuery();
    this._launchService.getLaunches(query).subscribe(val => {
      this.skeleton = { yes: false };
      this.projects = val;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      console.error(err);
      alert('Error occured while fetching launch info.')
    })
  }

  private _getQuery(): string {
    let query = '';
    let path = '';
    let year = this._window.localStorage.getItem(this.YEAR);
    let land = this._window.localStorage.getItem(this.LAND);
    let launch = this._window.localStorage.getItem(this.LAUNCH);

    if (this._isStoregeExists) {
      query = this._window.localStorage.getItem(this.PATH);
      if (year) {
        this.years.find(val => val.value.toString() == year).isActive = true;
        this._filterObj.year = parseInt(year);
      }

      if (land !== null) {
        this.landOpt.find(val => (val.value as string).toLowerCase() == land).isActive = true;
        this._filterObj.land = land.toLowerCase() === 'true' ? true : false;
      }

      if (launch !== null) {
        this.launchOpt.find(val => (val.value as string).toLowerCase() == launch).isActive = true;
        this._filterObj.launch = launch.toLowerCase() === 'true' ? true : false;
      }


    } else {
      this._resetStorage();
      if (this._filterObj.year) {
        query += `&launch_year=${this._filterObj.year}`;
        this._window.localStorage.setItem(this.YEAR, this._filterObj.year.toString());
      }
      else {
        this._window.localStorage.removeItem(this.YEAR);
      }

      if (this._filterObj.land !== undefined) {
        if (this._filterObj.land === true) {
          query += `&land_success=true`;
        } else {
          query += `&land_success=false`;
        }
        this._window.localStorage.setItem(this.LAND, this._filterObj.land.toString());
      }
      else {
        this._window.localStorage.removeItem(this.LAND);
      }

      if (this._filterObj.launch !== undefined) {
        if (this._filterObj.launch === true) {
          query += `&launch_success=true`;
        } else {
          query += `&launch_success=false`;
        }
        this._window.localStorage.setItem(this.LAUNCH, this._filterObj.launch.toString());
      } else {
        this._window.localStorage.removeItem(this.LAUNCH);
      }

      path = this._location.path().split('&')[0];
    }

    this._isStoregeExists = false;
    path = path + query;
    query = this._query + query;
    this._location.go(path);
    this._window.localStorage.setItem(this.PATH, path);

    return query;
  }

  private _resetStorage() {
    this._window.localStorage.removeItem(this.PATH);
  }

  public selectedYearHandler(year: number) {
    if (year === null) {
      delete this._filterObj.year;
    } else {
      this._filterObj.year = year;
    }
    this._getLaunchInfo();
    this._scrollToTop();
  }


  public selectedLaunchHandler(launch: string) {
    if (launch === null) {
      delete this._filterObj.launch;
    } else {
      if (launch.toLowerCase() === 'true') {
        this._filterObj.launch = true;
      } else {
        this._filterObj.launch = false;
      }
    }
    this._getLaunchInfo();
    this._scrollToTop();
  }


  public selectedLandingHandler(landing: string) {
    if (landing === null) {
      delete this._filterObj.land;
    } else {
      if (landing.toLowerCase() === 'true') {
        this._filterObj.land = true;
      } else {
        this._filterObj.land = false;
      }
    }
    this._getLaunchInfo();
    this._scrollToTop();
  }

  private _scrollToTop() {
    this._window.scrollTo(0, 0);

  }


}
