import { Component } from '@angular/core';

@Component({
  selector: 'app-qualite',
  templateUrl: './qualite.component.html',
  styleUrls: ['./qualite.component.scss'],
})
export class QualiteComponent {
  documents = [
    {
      nom: 'Affiche : Ici on cuisine Bio',
      src: 'assets/affiche-bio-occitanie.png',
      source: 'Affiche éditée par la Région Occitanie',
      ouvert: false,
    },
    {
      nom: 'Affiche : Produits locaux et régionaux',
      src: 'assets/affiche-produits-occitanie.png',
      source: 'Affiche éditée par la Région Occitanie',
      ouvert: false,
    },
    {
      nom: "Affiche : Label pour les cantines d'Occitanie",
      src: 'assets/affiche-label-occitanie.png',
      source: 'Affiche éditée par la Région Occitanie',
      ouvert: false,
    },
    {
      nom: 'Affiche : Pain bio et local',
      src: 'assets/affiche-pain-bio.png',
      source: 'Affiche éditée par le lycée Charlemagne',
      ouvert: false,
    },
    {
      nom: 'Affiche : Lutte contre le gaspillage',
      src: 'assets/affiche-faim-gaspillage.png',
      source: 'Affiche éditée par le Campus Terre et Nature',
      ouvert: false,
    },
    {
      nom: "Sticker : Niveau 2 Cant'Occ",
      src: 'assets/sticker-cantocc.png',
      source: 'Affiche éditée par la Région Occitanie',
      ouvert: false,
    },
  ];

  toggleDoc(doc: any) {
    doc.ouvert = !doc.ouvert;
  }
}
