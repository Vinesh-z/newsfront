import { FacadeService } from './../../services/facade.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-group-edit',
  templateUrl: './registration-group-edit.component.html',
  styleUrls: ['./registration-group-edit.component.css']
})
export class RegistrationGroupEditComponent implements OnInit {

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private facadeService: FacadeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        if (!params.id) {
          this.router.navigateByUrl('/');
        }
      });

      //this.facadeService.getGroups
  }

}
