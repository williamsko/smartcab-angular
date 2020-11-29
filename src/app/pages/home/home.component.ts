import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { Agent, Balance } from '../../shared/models/agent';
import { Transaction } from '../../shared/models/transaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transactions: Transaction[];
  agent: any;
  title: string;
  subtitle: string;

  constructor(
    private router: Router,
    private transactionService: TransactionService
  ) {
    this.title = 'Dashboard';
    this.subtitle = 'Dashboard';
  }

  ngOnInit(): void {
    this.transactions = [];
    this.agent = JSON.parse(localStorage.getItem('AGENT'));
    console.log(this.agent);

    // this.checkSharedInfo();
    this.getTransactionHistory();
    this.getBalance();
  }

  public openPageRecouvrement(): void {
    this.router.navigate(['/recouvrement']);
  }

  private getTransactionHistory(): void {
    this.transactionService.history(5).subscribe(
      (result) => {
        for (const transaction of result.objects) {
          this.transactions.push({
            amount: transaction.amount,
            created: transaction.created,
            currency: transaction.currency,
            destination: transaction.destination,
            number: transaction.number,
            paid_amount: transaction.paid_amount,
            source: transaction.source,
            status: transaction.status,
            type: transaction.type,
          });
        }
      },
      (error) => console.log(error)
    );
  }

  private getBalance(): void {
    this.transactionService.balance().subscribe(
      (result) => {
        const balance: Balance = {
          balance: result.balance,
          commission: result.commission,
        };
        this.agent.balance = balance;
      },
      (error) => console.log(error)
    );
  }
}
