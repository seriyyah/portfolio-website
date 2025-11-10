export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly level: number; // 1-100
  readonly category: SkillCategory;
  readonly icon?: string;
}

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'design'
  | 'tools';

export interface WorkExperience {
  readonly id: string;
  readonly company: string;
  readonly position: string;
  readonly startDate: Date;
  readonly endDate?: Date;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly achievements: readonly string[];
  readonly location: string;
  readonly companyUrl?: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription?: string;
  readonly technologies: readonly string[];
  readonly imageUrl?: string;
  readonly demoUrl?: string;
  readonly codeUrl?: string;
  readonly featured: boolean;
  readonly startDate: Date;
  readonly endDate?: Date;
  readonly status: ProjectStatus;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'archived';

export interface ContactForm {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

export interface SocialLink {
  readonly id: string;
  readonly platform: string;
  readonly url: string;
  readonly icon: string;
  readonly username?: string;
}

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly bio: string;
  readonly location: string;
  readonly email: string;
  readonly phone?: string;
  readonly avatar?: string;
  readonly resumeUrl?: string;
  readonly socialLinks: readonly SocialLink[];
}

export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon?: string;
}

export interface Theme {
  readonly primary: string;
  readonly secondary: string;
  readonly accent: string;
  readonly background: string;
  readonly foreground: string;
  readonly muted: string;
}

export interface AnimationConfig {
  readonly duration: number;
  readonly ease: string;
  readonly delay?: number;
}