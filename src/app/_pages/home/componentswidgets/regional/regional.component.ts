import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-regional',
  imports: [CommonModule],
  templateUrl: './regional.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionalComponent {


  // ==============================
  // TEAM STATE
  // ==============================
  selectedIndex = 0;
  visibleStart = 0;
  visibleCount = 4;

  team = [
    { 
      name: "OMAR KASSOU", 
      rs:{
        instagram: "https://www.instagram.com/OMAR_KASSOU",
        facebook: "https://www.facebook.com/OMAR_KASSOU",
        linkedin: "https://www.linkedin.com/OMAR_KASSOU",
        x_twitter: "https://www.x.com/OMAR_KASSOU",
      },
      role: "Expert", 
      poste: "CEO BearingPoint",
      country: "UAE", 
      flag: "https://flagcdn.com/w20/ae.png", 
      image: "https://i.pravatar.cc/100?img=1", 
      bio: "Jeunesse et Formation : Mouncef a grandi dans un environnement où l'éducation et l'ambition étaient fortement valorisées. Son parcours académique exemplaire au Maroc lui a permis d'envisager des horizons plus larges, notamment le rêve de poursuivre ses études à l'étranger. Carrière Professionnelle : Après avoir brillamment terminé ses études, Mouncef a saisi l'opportunité de travailler au Canada. Il a été embauché par une entreprise locale, où il a rapidement fait ses preuves grâce à son expertise, son éthique de travail rigoureuse et sa capacité à s'adapter à de nouveaux défis. Son travail acharné et ses compétences exceptionnelles lui ont permis de gravir les échelons au sein de l'entreprise, gagnant le respect de ses collègues et de ses supérieurs." 
    },
    { 
      name: "LOUISE JADE", 
      rs:{
        instagram: "https://www.instagram.com/LOUISE_JADE",
        facebook: "https://www.facebook.com/LOUISE_JADE",
        linkedin: "https://www.linkedin.com/LOUISE_JADE",
        x_twitter: "https://www.x.com/LOUISE_JADE",
      },
      role: "Creative Director",
      poste: "CEO BearingPoint 2", 
      country: "France", 
      flag: "https://flagcdn.com/w20/fr.png", 
      image: "https://i.pravatar.cc/100?img=2", 
      bio: "Creative leader" 
    },
    { 
      name: "MOUNCEF NOUANI", 
      rs:{
        instagram: "https://www.instagram.com/MOUNCEF_NOUANI",
        facebook: "https://www.facebook.com/MOUNCEF_NOUANI",
        linkedin: "https://www.linkedin.com/MOUNCEF_NOUANI",
        x_twitter: "https://www.x.com/MOUNCEF_NOUANI",
      },
      role: "Transformation", 
      poste: "CEO BearingPoint 3",
      country: "Canada", 
      flag: "https://flagcdn.com/w20/ca.png", 
      image: "https://i.pravatar.cc/100?img=3", 
      bio: "Transformation expert" 
    },
    { 
      name: "ABDELLATIF EL MAHRAOUI", 
      rs:{
        instagram: "https://www.instagram.com/ABDELLATIF_EL_MAHRAOUI",
        facebook: "https://www.facebook.com/ABDELLATIF_EL_MAHRAOUI",
        linkedin: "https://www.linkedin.com/ABDELLATIF_EL_MAHRAOUI",
        x_twitter: "https://www.x.com/ABDELLATIF_EL_MAHRAOUI",
      },
      role: "Strategy", 
      poste: "CEO BearingPoint 4", 
      country: "Maroc", 
      flag: "https://flagcdn.com/w20/ma.png", 
      image: "https://i.pravatar.cc/100?img=4", 
      bio: "Strategy expert" 
    },
    { 
      name: "NEW MEMBER", 
      rs:{
        instagram: "https://www.instagram.com/NEW_MEMBER",
        facebook: "https://www.facebook.com/NEW_MEMBER",
        linkedin: "https://www.linkedin.com/NEW_MEMBER",
        x_twitter: "https://www.x.com/NEW_MEMBER",
      },
      role: "Consultant", 
      poste: "CEO BearingPoint 5",
      country: "USA", 
      flag: "https://flagcdn.com/w20/us.png", 
      image: "https://i.pravatar.cc/100?img=5", 
      bio: "Consultant" 
    }
  ];

  visibleTeam: any[] = [];

  // ==============================
  // LIFECYCLE
  // ==============================
  ngOnInit(): void {
    this.updateVisibleTeam();
  }

 

  // ==============================
  // TEAM METHODS
  // ==============================

  updateVisibleTeam() {
    this.visibleTeam = this.team.slice(
      this.visibleStart,
      this.visibleStart + this.visibleCount
    );
  }

  scrollUp() {
    if (this.visibleStart > 0) {
      this.visibleStart--;
      this.updateVisibleTeam();
    }
  }

  scrollDown() {
    if (this.visibleStart + this.visibleCount < this.team.length) {
      this.visibleStart++;
      this.updateVisibleTeam();
    }
  }

  selectMember(i: number) {
    this.selectedIndex = i + this.visibleStart;
  }

  get selectedMember() {
    return this.team[this.selectedIndex];
  }

  // ==============================
  // COUNTER
  // ==============================
  get currentIndex() {
    return (this.selectedIndex + 1).toString().padStart(2, '0');
  }

  get totalCount() {
    return this.team.length.toString().padStart(2, '0');
  }

  /* Regional Section */
  // List of representative locations with details and position on the map (in % for positioning)
  locations = [
    {
      country: 'Canada',
      flag: 'https://flagcdn.com/w20/ca.png',
      office: 'BearingPoint Canada',
      city: 'Montréal',
      website: 'www.Moncef.com',
      websiteUrl: 'https://www.moncef.com',
      image: 'https://i.pravatar.cc/50?img=3',
      leftPercent: 12,
      topPercent: 30,
      showPopup: false
    },
    {
      country: 'Brazil',
      flag: 'https://flagcdn.com/w20/br.png',
      office: 'Brazilian Office',
      city: 'São Paulo',
      website: 'www.braziloffice.com',
      websiteUrl: 'https://www.braziloffice.com',
      image: 'https://i.pravatar.cc/50?img=7',
      leftPercent: 22,
      topPercent: 65,
      showPopup: false
    },
    {
      country: 'USA',
      flag: 'https://flagcdn.com/w20/us.png',
      office: 'US Headquarters',
      city: 'New York',
      website: 'www.usaoffice.com',
      websiteUrl: 'https://www.usaoffice.com',
      image: 'https://i.pravatar.cc/50?img=5',
      leftPercent: 39,
      topPercent: 50,
      showPopup: false
    },
    {
      country: 'UK',
      flag: 'https://flagcdn.com/w20/gb.png',
      office: 'UK Office',
      city: 'London',
      website: 'www.ukoffice.com',
      websiteUrl: 'https://www.ukoffice.com',
      image: 'https://i.pravatar.cc/50?img=10',
      leftPercent: 42,
      topPercent: 33,
      showPopup: false
    },
    {
      country: 'Germany',
      flag: 'https://flagcdn.com/w20/de.png',
      office: 'Germany Office',
      city: 'Berlin',
      website: 'www.germanyoffice.com',
      websiteUrl: 'https://www.germanyoffice.com',
      image: 'https://i.pravatar.cc/50?img=12',
      leftPercent: 55,
      topPercent: 48,
      showPopup: false
    },
    {
      country: 'China',
      flag: 'https://flagcdn.com/w20/cn.png',
      office: 'Huawei',
      city: 'Shenzhen',
      website: 'www.huawei.com',
      websiteUrl: 'https://www.huawei.com',
      image: 'https://i.pravatar.cc/50?img=15',
      leftPercent: 70,
      topPercent: 35,
      showPopup: false
    },
    {
      country: 'Australia',
      flag: 'https://flagcdn.com/w20/au.png',
      office: 'BHP',
      city: 'Sydney',
      website: 'www.bhp.com',
      websiteUrl: 'https://www.bhp.com',
      image: 'https://i.pravatar.cc/50?img=18',
      leftPercent: 83,
      topPercent: 70,
      showPopup: false
    }
  ];

  togglePopup(idx: number) {
    // Toggle popup for clicked location, close others
    this.locations.forEach((loc, i) => {
      loc.showPopup = (i === idx) ? !loc.showPopup : false;
    });
  }

 

}
