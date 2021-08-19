import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },

    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private router: Router,
    private platform: Platform,

  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
    
    // Set new Home page
   this.router.navigateByUrl("home");
    // Exit App on back button click from Home page
   this.platform.backButton.subscribeWithPriority(0, () => {
    if (window.location.pathname == "/home") {
      navigator['app'].exitApp();
    }
    //Go to home page from other pages
  if (window.location.pathname !== "/home") {
    this.router.navigateByUrl("home");
  } 
  });
  });
  
 
}}
