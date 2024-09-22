export interface IProfileResp {
	intro: IIntro;
	projects: IProject[];
	activities: IActivity[];
	technologies: ITechnology[];
	workExperiences: IWorkExperience[];
	educations: IEducation[];
	certifications: ICertification[];
	interests: string[];
	resumeUrl: {
		sourceLink: string;
		fullVersionLink: string;
	};
}

export interface IIntro {
	name: string;
	nickname: string;
	phone: string;
	email: string;
	github: string;
	linkedin: string;
	location: string;
	website: string;
}

export interface IProject {
	name: string;
	task: string;
	details: string;
	description: string;
	url: string;
	hide: boolean;
}

export interface IActivity {
	name: string;
	url: string;
	details: string;
	hide: boolean;
}

export interface ITechnology {
	section: string;
	details: string;
}

export interface IWorkExperience {
	position: string;
	company: string;
	url: string;
	years: string[];
	details: string[];
}

export interface ICertification {
	name: string;
	details: string;
}

export interface IEducation {
	head: string;
	details: string;
	take_courses: string;
}
