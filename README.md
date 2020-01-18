# ionic-ios-component-modules
Small modules of ios features found on many sketched


[![app-display.png](https://i.postimg.cc/j2tRxX1d/app-display.png)](https://postimg.cc/VrGx4j13)
```javascript 
<ion-header>
  <pic-header-profile
    [title]="'Home'"
    (onAvatarClicked)="onAvatarClicked($event)"
  ></pic-header-profile>
</ion-header>
<ion-content>
  <div class="ion-padding">
    <pic-card-feature
      [subtitle]="'Featured'"
      [title]="'Injustice 2'"
      [content]="'Injustice 2 is a 2017 fighting video game based upon the DC Universe. It was developed by NetherRealm Studios and published by Warner Bros.'"
      [src]="'https://bordalo.observador.pt/500x,q85/https://s3.observador.pt/wp-content/uploads/2017/05/25151334/thumb-1920-790802_770x433_acf_cropped.jpg'"
    >
    </pic-card-feature>
    <pic-card-feature
      [subtitle]="'Featured'"
      [title]="'Monument Valley'"
      [content]="'Unforgettable. In Monument Valley, you wander through a beautiful world of castles, sunsets and towers that seem to reach the moon. '"
      [src]="'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.phonandroid.com%2F2017%2F11%2Fmonument-valley-2-android.jpg&f=1&nofb=1'"
    >
    </pic-card-feature>
  </div>
</ion-content>
```


