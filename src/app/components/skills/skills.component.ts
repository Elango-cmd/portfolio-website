import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring Boot', icon: 'fas fa-cogs' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'REST APIs', icon: 'fas fa-network-wired' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'HTML/CSS', icon: 'fab fa-html5' },
    { name: 'JavaScript', icon: 'fab fa-js' }
  ];
}
