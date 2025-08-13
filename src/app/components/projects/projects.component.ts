import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectType = 'work' | 'personal' | 'in-progress';

interface Project {
  title: string;
  desc: string;
  tech: string;
  iconClass?: string;       
  type: ProjectType;
  period?: string;          
  company?: string;         
  frontend?: string;
  backend?: string;
  note?: string;           
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  filter: 'all' | ProjectType = 'all';

  setFilter(f: 'all' | ProjectType) {
    this.filter = f;
  }

  matchesFilter(p: Project): boolean {
    if (this.filter === 'all') return true;
    if (this.filter === 'in-progress') return p.type === 'in-progress';
    return p.type === this.filter;
  }

  projects: Project[] = [
     // ===== Personal / Portfolio =====
    {
      title: 'Inventory Application',
      desc: 'Products, suppliers, users; DTOs, services, validation, and Angular CRUD with reactive forms.',
      tech: 'Angular, Spring Boot, MySQL, JWT',
      type: 'personal',
      frontend: 'https://github.com/Elango-cmd/inventory-management-system-frontend.git',
      backend: 'https://github.com/Elango-cmd/inventory-management-system-backend.git'
    },
    {
      title: 'Banking Application',
      desc: 'Accounts, transactions, authentication/authorization, error handling, and test data seeding.',
      tech: 'Angular, Spring Boot, MySQL, JWT',
      type: 'personal',
      frontend: 'https://github.com/Elango-cmd/banking-application-frontend.git',
      backend: 'https://github.com/Elango-cmd/banking-application-backend.git'
    },
        {
      title: 'Personal Portfolio Website',
      desc: 'Responsive single-page portfolio to showcase projects, skills, and experience with smooth animations and filters.',
      tech: 'Angular, Bootstrap, AOS Animation, Responsive Design',
      type: 'personal',
      iconClass: 'fas fa-laptop-code',
      frontend: 'https://github.com/Elango-cmd/portfolio-website.git',
      note: 'Deployed on GitHub Pages'
    },
    {
      title: 'E-Commerce Platform (In Progress)',
      desc: 'Catalog, cart, orders backend ~50% complete; Angular frontend ~50% complete.',
      tech: 'Spring Boot, MySQL (frontend pending)',
      type: 'in-progress',
      frontend: 'https://github.com/Elango-cmd/ecommerce-application-frontend',
      backend: 'https://github.com/Elango-cmd/ecommerce-application-backend'
    },
    // ===== Work (PartnerSoft: Sep 2022 – Oct 2023) =====
    {
      title: 'Database Management Application',
      desc: 'Internal CRUD platform for managing client/product records with role-based access and audit logs.',
      tech: 'Java, Spring Boot, MySQL, REST, JWT',
      type: 'work',
      company: 'PartnerSoft Technologies',
      period: 'Sep 2022 – Oct 2023',
      note: 'Work project – code private'
    },
    {
      title: 'Tourism (Travel/Tourist) Application',
      desc: 'Itinerary search, booking workflows, vendor integration, and admin dashboards.',
      tech: 'Java, Spring Boot, MySQL, Thymeleaf/Angular (modules), REST',
      type: 'work',
      company: 'PartnerSoft Technologies',
      period: 'Sep 2022 – Oct 2023',
      note: 'Work project – code private'
    },
    {
      title: 'Recruitment Application',
      desc: 'Candidate pipeline, resume parsing, interview scheduling, and status tracking.',
      tech: 'Spring Boot, MySQL, REST, JWT; 3rd-party resume parser',
      type: 'work',
      company: 'PartnerSoft Technologies',
      period: 'Sep 2022 – Oct 2023',
      note: 'Work project – code private'
    },
    {
      title: 'Various Feature Modules & Sub-projects',
      desc: 'Email/SMS notifications, file upload service, custom exceptions, pagination/sorting, performance fixes.',
      tech: 'Spring Boot, MySQL, Quartz/Scheduler, AWS S3 (if applicable)',
      type: 'work',
      company: 'PartnerSoft Technologies',
      period: 'Sep 2022 – Oct 2023',
      note: 'Work deliverables – code private'
    }
  ];
}
