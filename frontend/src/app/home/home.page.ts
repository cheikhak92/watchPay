import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../service/data.service';
import { isAfter, addHours } from 'date-fns';


declare let $:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    username:"",
    password:""
  };

  nogo = true;

  message = "";

  events : any;

  show = false;

  constructor(private navCtrl : NavController, private dataService: DataService) {
  }


  ionViewDidEnter(){
    if (localStorage.getItem("userToken")) {
      if (isAfter(addHours(new Date(JSON.parse(localStorage.getItem("userToken")).time),18),new Date())) {
          this.navCtrl.navigateRoot("site");
      } else {
        this.show = true;
      }
    }else {
      this.show = true;
    }
  }
  login() {
    this.nogo = false;
    this.user.username = this.user.username.toLowerCase();
    this.dataService.post("/sites", this.user)
     .then(
        (user:any)=> {
          localStorage.setItem("userAccount",JSON.stringify(user.user));
          localStorage.setItem("userToken",JSON.stringify({token: user.id, time: new Date()}));
          this.navCtrl.navigateRoot("site");
     },
         err =>{
          //alert(JSON.stringify(err));
          this.nogo = true;
          this.user.password = "";
          this.message = "Echec d'authentification !";
        }
      )
  }
}
