import { Component, OnChanges, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Agent } from '../../shared/models/agent';
import { Transaction } from '../../shared/models/transaction';
import { ObjectUtility } from '../../shared/utils/object.utility';

@Component({
  selector: 'app-historique-transaction',
  templateUrl: './historique-transaction.component.html',
  styleUrls: ['./historique-transaction.component.scss'],
})
export class HistoriqueTransactionComponent implements OnInit, OnChanges {
  transactions: Transaction[];
  agent: Agent;
  title: string;
  subtitle: string;

  constructor(private transactionService: TransactionService) {
    this.agent = ObjectUtility.getAgentInformation();
    this.title = 'Transactions';
    this.subtitle = 'Historique';
  }

  ngOnInit(): void {
    this.transactions = [];
    this.getTransactionHistory();
  }

  ngOnChanges(): void {
    this.transactions = [];
  }

  getTransactionHistory(): void {
    this.transactionService.history().subscribe(
      (result) => {
        console.log(result.objects);
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
}
