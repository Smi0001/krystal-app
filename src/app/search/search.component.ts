import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  query = '';
  queryList = [];
  equityStock = [];
  table: any;
  progress = false;
  constructor(
    private assetService: AssetService
  ) { }

  ngOnInit() {
    // this.dataTableReady();
  }

  searching(e) {
    if (this.query !== '' && this.query.trim() !== '') {
      const params = {
        query: this.query.trim(),
        type: 'STK',
        filter: '',
        isCustom: false
      };
      this.progress = true;
      // console.log('query->', this.query);
      this.assetService.getAutocomplete(params).subscribe( (res) => {
        // console.log(res);
        if (res) {
          this.queryList = res;
        }
        this.progress = false;
      });
    }
  }

  findDetails(id) {
    this.queryList = [];
    const params = {
      asset: id,
      type: 'STK',
      isCustom: false,
      date: ''
    };
    this.assetService.getESDetails(params).subscribe( (res) => {
      if (res) {
        this.equityStock = [];
        this.equityStock.push(res);
        // this.dataTableReady();
      }
    });
  }
  // due to technical errors in ussing dataTable with typescript, it is not being used currently
  dataTableReady() {
    const equitoStockArray = this.equityStock;
    console.log(equitoStockArray);
    if (this.table) {
      this.table.destroy();
    }
    this.table = $('#esDetails').DataTable({
      'processing': true,
      'ajax': function (data, callback, settings) { callback({ data: [equitoStockArray] } ); },
      // data: {data: me.equityStock},
      columns: [
        {
          title: 'askPrice',
          'data': 'askPrice'
        },
        {
          title: 'bidPrice',
          'data': 'bidPrice'
        },
        {
          title: 'cashDividend',
          'data': 'cashDividend'
        },
        {
          title: 'contractName',
          'data': 'contractName'
        },
        {
          title: 'country',
          'data': 'country'
        },
        {
          title: 'currency',
          'data': 'currency'
        },
        {
          title: 'country',
          'data': 'country'
        },
        {
          title: 'cusip',
          'data': 'cusip'
        },
        {
          title: 'exchange',
          'data': 'exchange'
        },
        {
          title: 'highPrice',
          'data': 'highPrice'
        },
        {
          title: 'isin',
          'data': 'isin'
        },
        {
          title: 'issuer',
          'data': 'issuer'
        },
        {
          title: 'lastPrice',
          'data': 'lastPrice'
        },
        {
          title: 'lowPrice',
          'data': 'lowPrice'
        },
        {
          title: 'openPrice',
          'data': 'openPrice'
        },
        {
          title: 'pricingDate',
          'data': 'pricingDate'
        },
        {
          title: 'splitRatio',
          'data': 'splitRatio'
        },
        {
          title: 'subclass',
          'data': 'subclass'
        },
        {
          title: 'symbol',
          'data': 'symbol'
        },
        { title: 'volume',
          'data': 'volume'
       }
      ]
    });
  }
}
