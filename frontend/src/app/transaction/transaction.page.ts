import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { Operateur } from '../models/operateur.model';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-site',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  features: any[] = [
    {id: 1, name: 'bank', src: '../../assets/icons/bank.jpeg', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 2, name: 'Achat', src: '../../assets/icons/achat.jpeg', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 3, name: 'Transfert', src: 'assets/icons/send.png', background: 'rgba(255, 196, 9, 0.1)', page: ''},
    {id: 4, name: 'Payer', src: 'assets/icons/debit-card.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  ];

  // transactions: any[] = [
  //   {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
  //   {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
  // ];

  constructor(private navCtrl: NavController, private menu: MenuController,private http: HttpClient, private dataService: DataService,
    private activatedRoute: ActivatedRoute)
     {
      // this.getSite();
    }


  ngOnInit() {

  }

  // getSite(){
  //   this.dataService.get('/sites')
  //   .then(
  //     (response:any) => {
  //       this.sites = response;
  //       //console.log(this.sites);
  //     },

  //     err => {

  //     }

  //   );
  // }


}

