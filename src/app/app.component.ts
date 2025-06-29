import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { Carousel } from 'primeng/carousel';
import { Timeline } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollTopModule } from 'primeng/scrolltop';




@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    MenubarModule,
    ToastModule,
    TabViewModule,
    AvatarModule,
    CardModule,
    Carousel,
    Timeline,
    DividerModule,
    CommonModule,
    DialogModule,
    TagModule,
    AnimateOnScrollModule,
    ScrollTopModule,
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  darkMode = false;
  items: MenuItem[] | undefined;
  projects: any[] = [];
  documents: any[] = [];
  responsiveOptions: any[] | undefined;
  education: any[] = [];
  extracurricular: any[] = [];

  constructor(private messageService: MessageService, private clipboard: Clipboard, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    this.items = [
      {
        label: 'About',
        icon: 'pi pi-fw pi-info',
        routerLink: ['/'],
        fragment: 'about'
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-folder',
        routerLink: ['/'],
        fragment: 'projects'
      },
      {
        label: 'Education',
        icon: 'pi pi-fw pi-book',
        routerLink: ['/'],
        fragment: 'education'
      },
      {
        label: 'Documents',
        icon: 'pi pi-fw pi-file-pdf',
        routerLink: '/',
        fragment: 'documents'
      },
      {
        label: 'Extracurricular',
        icon: 'pi pi-fw pi-sparkles',
        routerLink: ['/'],
        fragment: 'extracurricular'
      }
    ];

    this.projects = [
      {
        id: 1,
        title: "ERP-Commercial",
        description: "Built the MVP of a modular ERP system, delivered as a SaaS platform for SMBs in retail and wholesale sectors, enabling end-to-end management of sales, inventory, and financial operations.",
        skills: ["Angular - TypeScript", "FastAPI - Python", "PrimeNG", "PostgreSQL"],
        githubLink: "",
        bgImage: "images/projects/erp-1.png",
        videoLink: "https://drive.google.com/file/d/1L9YIzhEhJuBgGDirFcsR7_sKFSEsu0kr/view"
      },
      {
        id: 2,
        title: "ATHAR",
        description: "A mobile application to promote archaeological sites in Tunisia.",
        skills: ["Flutter", "Firebase", "Unity 3D", "Augmented Reality"],
        githubLink: "",
        bgImage: "images/projects/athar-bg.png",
        videoLink: "https://drive.google.com/file/d/1L9YIzhEhJuBgGDirFcsR7_sKFSEsu0kr/view"
      },
      {
        id: 3,
        title: "Car Paradise",
        description: "Developed a comprehensive car rental management system with features including customer and vehicle management, booking automation, and PDF invoice generation.",
        skills: ["Spring Boot - Java", "Angular - TypeScript", "Mysql"],
        githubLink: "https://github.com/Haithem-SBOUI/Car-Rental-System-frontend#",
        bgImage: "images/projects/car-paradise.png",
        videoLink: "https://drive.google.com/file/d/1L9YIzhEhJuBgGDirFcsR7_sKFSEsu0kr/view"
        
      }
    ]

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.education = [
      { university: 'Schmalkalden Fachhochschule', details: 'Student in Computer Science', location: 'Schmalkalden, Germany', date: 'Apr. 2025 - Present', icon: 'pi pi-shopping-cart' },
      { university: 'TEK-UP University', details: 'Master in Software and Information System Engineering', location: 'Ariana, Tunisia', date: 'Sep. 2022 - Mar. 2025', icon: 'pi pi-cog' },
      { university: 'Higher Institute of Computer Science Mahdia', details: 'Bachelor in Computer Science', location: 'Mahdia, Tunisia', date: 'Sep. 2019 - Jun. 2022 ', icon: 'pi pi-shopping-cart' },
      { university: 'Gabes High School', details: 'High school diploma in Computer Science', location: 'Gabes, Tunisia ', date: 'Jun. 2019', icon: 'pi pi-check' }
    ];
    this.documents = [
      {
        title: "Resume",
        url: "documents/Haithem_SBOUI_resume.pdf",
      },
      {
        title: "Work Reference",
        url: "documents/Haithem_SBOUI_work_reference.pdf",
      },
      {
        title: "Internship Reference",
        url: "documents/Haithem_SBOUI_internship_reference.pdf",
      }
    ]
    //     TCPC (Tunisian Collegiate Programming Contest) sept 2024
    // Competitor
    // ∗ 
    // ∗ Language: C++
    // Google Developer Student Clubs - Mahdia July 2021 – Jun 2022
    // Organizer - Content Creator
    // ∗ Ranked 1st in Tunisia and 3rd in the Middle East North Africa region, achieved through significant teamwork efforts.
    // ∗ Enhanced key soft skills during this experience, notably improving communication and teamwork abilities. Additionally,
    // acquired proficiency in Adobe Suite.
    this.extracurricular = [
      {
        title: "TCPC (Tunisian Collegiate Programming Contest)",
        description: "Participated in the prestigious national-level programming competition where I, along with two teammates, enhanced our problem-solving and competitive programming skills. This event gathers top talent from universities across the country.",
        skills: "Language: C++",
      },
      {
        title: "Google Developer Student Clubs",
        description: "Ranked 1st in Tunisia and 3rd in the Middle East North Africa region, achieved through significant teamwork efforts.",
        skills: "Enhanced key soft skills during this experience, notably improving communication and teamwork abilities. Additionally, acquired proficiency in Adobe Suite.",
      }
    ];
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.querySelector('html')?.classList.toggle('my-app-dark');
  }
  copyEmail() {
    console.log('Copying email...');
    const email = 'your.email@example.com'; // Replace with your actual email
    this.clipboard.copy(email)
    this.messageService.add({ severity: 'success', summary: 'Copied', detail: 'Email copied!' });
  }

  openLink(url: string) {
    console.log('Opening link:', url);
    if (url && url !== '') {
      window.open(url, '_blank');
    } else {
      this.messageService.add({ severity: 'warn', summary: 'No Link', detail: 'This project does not have a public repository.' });
    }
  }

  openDocument(link: string) {
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.click();
  }


  visible = false;
  selectedDocUrl: string | null = null;
  selectedTitle = '';

  showDialog(url: string, title: string) {
    this.selectedDocUrl = url;
    this.selectedTitle = title;
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
    this.selectedDocUrl = null;
  }

  getSanitizedUrl(url: string): SafeResourceUrl {
    console.log('Sanitizing URL:', url);
    const sanitized = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log('Sanitized URL:', sanitized);
    return sanitized;
  }

}
