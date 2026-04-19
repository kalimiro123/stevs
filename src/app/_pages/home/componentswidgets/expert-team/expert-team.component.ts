
import {
  Component,
  AfterViewInit,
  OnInit,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-expert-team',
  imports: [CommonModule],
  templateUrl: './expert-team.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpertTeamComponent {

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

  

}
