import { Component,Input, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService 
  ){}
  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.service.getHero(params.get('id')!))
    )
    throw new Error('Method not implemented.');
  }
  gotoHeroes(hero: Hero){
    const heroId =hero ? hero.id:null;
    this.router.navigate(['/heroes',{id:heroId}]);
  }
  hero$!: Observable<Hero>;
}
