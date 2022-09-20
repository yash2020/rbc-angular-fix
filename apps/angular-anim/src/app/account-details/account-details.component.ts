import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent {
  accounts: Account[] = [];
  currentid:any = "";
  result:any;
  constructor(private accountService: AccountService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
    console.log(this.accounts);
    // this.accountService.getAccounts().
    this.currentid = this.route.snapshot.paramMap.get("id");
    this.result = this.accounts.find(({id})=> id === this.currentid);
  }

}
