import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
import { RegisterdetailPage } from '../pages/registerdetail/registerdetail';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HttpModule } from '@angular/http';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ApprovalPage } from '../pages/approval/approval';
import { LoginPage } from '../pages/login/login';

import { ApprovaldetailPage } from '../pages/approvaldetail/approvaldetail';
import { SettingsPage } from '../pages/settings/settings';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { FarcalculationPage } from '../pages/farcalculation/farcalculation';
import { LogoutPage } from '../pages/logout/logout';
import { TabPage } from '../pages/tab/tab';
import { RequestuserPage } from '../pages/requestuser/requestuser';
import {CurrenttripPage } from '../pages/currenttrip/currenttrip';
import { DatePipe } from '@angular/common';
import {ModalPage } from '../pages/modal/modal';
import {
    ModalEnterDirect, ModalLeaveDirect
    ,ModalEnterFadeIn, ModalLeaveFadeOut
    ,ModalEnterZoomIn, ModalLeaveZoomIn
    ,ModalEnterZoomOut, ModalLeaveZoomOut
} from '../classes/ionic-modal-transition-pack';
import { CallNumber } from '@ionic-native/call-number';
import { MessagePage } from '../pages/message/message';
import { CurentdetailPage } from '../pages/curentdetail/curentdetail';

@NgModule({
  declarations: [
    MyApp,ModalPage,
    RegisterPage,RegisterdetailPage,ApprovalPage,LoginPage,ApprovaldetailPage,
	SettingsPage,PrivacypolicyPage,FarcalculationPage,LogoutPage,TabPage,RequestuserPage,CurrenttripPage,CurentdetailPage,MessagePage
  ],
  imports: [
     HttpModule, BrowserModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,ModalPage,
    RegisterPage,RegisterdetailPage,ApprovalPage,LoginPage,ApprovaldetailPage,
	SettingsPage,PrivacypolicyPage,FarcalculationPage,LogoutPage,TabPage,RequestuserPage,CurrenttripPage,CurentdetailPage,MessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,FileTransfer,CallNumber,
	Geolocation,AndroidFullScreen,LocalNotifications,DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
	
	  constructor(public config: Config) {
        this.setCustomTransitions();
    }
    
    private setCustomTransitions() {
        this.config.setTransition('ModalEnterDirect', ModalEnterDirect);
        this.config.setTransition('ModalLeaveDirect', ModalLeaveDirect);
        
        this.config.setTransition('ModalEnterFadeIn', ModalEnterFadeIn);
        this.config.setTransition('ModalLeaveFadeOut', ModalLeaveFadeOut);
        
        this.config.setTransition('ModalEnterZoomIn', ModalEnterZoomIn);
        this.config.setTransition('ModalLeaveZoomIn', ModalLeaveZoomIn);
        
        this.config.setTransition('ModalEnterZoomOut', ModalEnterZoomOut);
        this.config.setTransition('ModalLeaveZoomOut', ModalLeaveZoomOut);
    }
	
	
}
