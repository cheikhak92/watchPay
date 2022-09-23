import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Operateur } from '../models/operateur.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-detail-site',
  templateUrl: './transaction-list.page.html',
  styleUrls: ['./transaction-list.page.scss'],
})
export class TransactionListPage implements OnInit {

   data: any;
   demande: any;
   qow: any;
   operateur: Operateur[]=[];
   searchTerm: string;
   file : File;
   finalFile : any;
   myReader:FileReader = new FileReader();
   newOperateur: Operateur;



   transactions: any[] = [
    {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
  ];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router:Router,) {

    this.newOperateur = new Operateur();
    this.myReader.onloadend = (e) => {
      this.finalFile = this.myReader.result;
    }

    // let id = this.route.snapshot.paramMap.get('id');

    // if(id){
    //   this.getDetails(id);
    //   this.getData(id);
    //   this.getDemande(id);
    //   this.getQow(id);
    //   }

  }

  ngOnInit() {
    this.getOperateur();
  }

  getOperateur(){
    this.dataService.get('/operateurs')
    .then(
      (response:any) => {
        this.operateur = response;
        //console.log(this.sites);
      },

      err => {

      }

    );
  }

  postOperateur(){

    let data =
    {
      nom: this.newOperateur.nom,
      logo: this.finalFile,
    }

    this.dataService.post('/operateurs', data)
    .then(
      (response:any) => {
        //console.log(this.sites);
        this.reloadCurrentRoute();
      },

      err => {
      }
    );
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
 }

//     getDetails(id){
//     this.dataService.get(`/sites/${id}`)
//     .then(
//       (response:any) => {
//         this.operateur=response;
//         //console.log(this.site);
//       },
//         err =>{

//         }
//     );
//   }

//  getData(id){
//   this.dataService.get(`/sites/${id}/dataterrains/`)
//   .then(
//     (response:any) => {
//       this.data=response;
//       //console.log(this.data);
//     },
//     err =>{

//     }
//   );
//  }

//  getDemande(id){
//   this.dataService.get(`/sites/${id}/demandes/`)
//   .then(
//     (response:any) => {
//       this.demande=response;
//       //console.log(this.demande);
//     },
//     err =>{

//     }
//   );
//  }



//  getQow(id){
//   this.dataService.get(`/sites/${id}/niveau-qowisios/`)
//   .then(
//     (response:any) => {
//       this.qow=response;
//       //console.log(this.qow);
//     },
//     err =>{

//     }
//   );
//  }
}
