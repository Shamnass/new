import { Component, ViewChild } from '@angular/core';
import { Platform, Nav,ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { FarcalculationPage } from '../pages/farcalculation/farcalculation';
import { LogoutPage } from '../pages/logout/logout';
import { Storage } from '@ionic/storage';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';
import {CurrenttripPage } from '../pages/currenttrip/currenttrip';
import { TabPage } from '../pages/tab/tab';
import { ApprovaldetailPage } from '../pages/approvaldetail/approvaldetail';
import {RequestuserPage } from '../pages/requestuser/requestuser';

import { RegisterdetailPage } from '../pages/registerdetail/registerdetail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
@ViewChild(Nav) nav: Nav;
  rootPage:any = null;
  pages: Array<{title: string, component: any,icon: string}>;
  pic:"";
  name:any;
  date:any;
  username:any;
  counter1:any;
  online:any;
  check:any;
 public counter=0;
  constructor(public datepipe: DatePipe,
 public http:Http,public toastCtrl: ToastController,public storage: Storage,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen)
  {
    platform.ready().then(() => {
this.storage.get('username').then((username) => {
this.storage.get('password').then((password) => {
	this.storage.get('active').then((active) => {
	if(username && password){
		if(active=='1'){
this.storage.get('username').then((username) => {
this.storage.get('id').then((id) => {
	this.date=new Date();
 let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
let headers = new Headers({"Content-Type'" : 'application/json','Accept': 'application/json',
'Access-Control-Allow-Origin':'*','Access-Control-Allow-Credentials':'true'});
headers.append('Content-Type', 'application/json');
let data=JSON.stringify({username:username,id:id,date:latest_date});
this.http.post('http://woi360.com/woi360auto/driver/requestcheck.php',data)
.map(res => res.json())
.subscribe(res => {
if(res[0]==null)
{
	console.log(username,id);
	this.nav.setRoot(TabPage); 
}
else
{	
this.storage.set('request_username', res[0].username);
this.storage.set('request_userid', res[0].userid);
this.storage.set('request_uniqueid', res[0].uniqueid);
this.storage.set('request_dist', res[0].distance);
this.storage.set('request_price', res[0].price);

if(res[0].accept=="1" && res[0].reject=="0")
{
	console.log(res[0].accept);
	this.nav.setRoot(CurrenttripPage);
}
if(res[0].accept=="1" && res[0].reject=="1")
{
	console.log("fdfdfdfdfd");
	this.nav.setRoot(TabPage); 
}
if(res[0].accept=="0" && res[0].reject=="0"){
		//this.nav.setRoot(RequestuserPage); 
		this.nav.setRoot(TabPage); 
}
if(res[0].accept=="0" && res[0].reject=="1"){
		//this.nav.setRoot(RequestuserPage); 
		this.nav.setRoot(TabPage); 
}
	  
}
}, (err) => {
	
	//this.loading();
//this.presentToast("No Result found...Try Again Later..");
 console.log("not found");
});
	});});}	
	else
	{this.nav.setRoot(ApprovaldetailPage);
	}
}
else{
	this.nav.setRoot(LoginPage);
}
});});});
		

		
		this.storage.get('username').then((username) => {
		if(username)
		{
     	platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.counter++;
		  this.nav.setRoot(TabPage);
          setTimeout(() => { this.counter = 0 }, 3000)
        } 
		else if (this.counter == 1) {
          this.counter++;
          this.presentToast();
          setTimeout(() => { this.counter =1}, 3000)
        } 
		else {
          // console.log("exitapp");
          platform.exitApp();
        }
		}, 0)}
else

platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.counter++;
		  this.presentToast();
          setTimeout(() => { this.counter = 0 }, 3000)
        } 
		else {
          // console.log("exitapp");
          platform.exitApp();
        }
		}, 0)
	});
    
	
    this.pages = [
      { title: 'Edit Profile', component: SettingsPage,icon: "brush"},
      { title: 'Privacy Policy', component: PrivacypolicyPage,icon: "logo-buffer"},
	  { title: 'Logout', component: LogoutPage,icon: "log-out"}
    ];
	
	this.storage.get('dp').then((dp) => {
		this.storage.get('nameofuser').then((nameofuser) => {
			if(dp!="" && nameofuser !="")
			{
				
	 this.pic=dp;
	 this.name=nameofuser;
			}
			else
			{
				console.log("");
			}
	 });});
	
	
  }); 
  
  this.counter1 = setInterval(() => {this.selectnameandpic(); console.log("updated");}, 3000);
	 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  
  
  
  
  
   presentToast() {
    let toast = this.toastCtrl.create({
      message: "Press again to exit",
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }
  
  
  
  
  
  
        selectnameandpic()
  {
  
  this.storage.get('username').then((username) => {
this.storage.get('password').then((password) => {
		if(username){
let headers = new Headers({"Content-Type'" : 'application/json','Accept': 'application/json',
'Access-Control-Allow-Origin':'*','Access-Control-Allow-Credentials':'true'});
headers.append('Content-Type', 'application/json');
let data=JSON.stringify({username:username,password:password});
this.http.post('http://woi360.com/woi360auto/driver/selectnameandpic.php',data)
.map(res => res.json())
.subscribe(res => {	
console.log(res);

this.pic=res[0].pic;
this.username=res[0].username;
if(res[0].online=='1')
{
	this.online="Offline";
}

else{
	this.online="online";
}
 this.storage.set('pic',res[0].pic);
}, (err) => {
 console.log("error"); 
		});}
		else{
			console.log("error"); 
		}
});});
		
  }
  
  
  online1()
  {
  this.storage.get('username').then((username) => {
this.storage.get('password').then((password) => {
		if(username){
let headers = new Headers({"Content-Type'" : 'application/json','Accept': 'application/json',
'Access-Control-Allow-Origin':'*','Access-Control-Allow-Credentials':'true'});
headers.append('Content-Type', 'application/json');
let data=JSON.stringify({username:username,password:password});
this.http.post('http://woi360.com/woi360auto/driver/online.php',data)
.map(res => res.json())
.subscribe(res => {	
console.log(res);

}, (err) => {
 console.log("error"); 
		});}
		else{
			console.log("error"); 
		}
});});
		
  }
  
  
  
  

}


