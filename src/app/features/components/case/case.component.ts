


import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/domain/product';


@Component({
    selector: 'app-case',
    templateUrl: './case.component.html',
    styleUrls: ['./case.component.scss'],
    providers: [MessageService]
})
export class CaseComponent implements OnInit {

    products!: Product[];
    statuses!: SelectItem[];
    newCase: Product = {} as Product;
    display: boolean = false;
dt1: any;
items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {} // Inject MessageService here

    ngOnInit() {
    

      this.items = [
        {
            
            items: [
                {
                    label: 'History',
                    icon: 'pi pi-history',
                    command: () => {
                    }
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-pencil',
                    command: () => {
                    }
                }
            ]
        },
      
    ];
        this.products = [
            {
                            case_id: 'CSE001',
                            case_name: 'Smith vs. Johnson',
                            type: 'Civil',
                            description: 'Dispute over property ownership.',
                            lawyer: 'John Doe',
                            court_name: 'Supreme Court',
                            location: 'New York, NY',
                            start_date: '2023-01-15',
                            status: 'In-Progress',
                            no_of_hearings: 5,
                            end_date: '',
                            documents: 'Document1.pdf, Evidence2.png',
                          },
                          {
                            case_id: 'CSE002',
                            case_name: 'State vs. Miller',
                            type: 'Criminal',
                            description: 'Assault charges filed by the state.',
                            lawyer: 'Jane Smith',
                            court_name: 'District Court',
                            location: 'Los Angeles, CA',
                            start_date: '2022-05-10',
                            status: 'Completed',
                            no_of_hearings: 12,
                            end_date: '2023-08-22',
                            documents: 'CaseFile.pdf, WitnessStatements.docx',
                          },
                          {
                            case_id: 'CSE003',
                            case_name: 'Brown vs. Green Corp.',
                            type: 'Commercial',
                            description: 'Breach of contract in a business deal.',
                            lawyer: 'Michael Davis',
                            court_name: 'Commercial Court',
                            location: 'Chicago, IL',
                            start_date: '2023-03-20',
                            status: 'Rejected',
                            no_of_hearings: 3,
                            end_date: '2023-06-15',
                            documents: 'Contract.pdf, RejectionNotice.docx',
                          },
                          {
                            case_id: 'CSE004',
                            case_name: 'Williams vs. City Council',
                            type: 'Civil',
                            description: 'Dispute over municipal regulations.',
                            lawyer: 'Emily Taylor',
                            court_name: 'High Court',
                            location: 'Houston, TX',
                            start_date: '2023-07-01',
                            status: 'In-Progress',
                            no_of_hearings: 7,
                            end_date: '',
                            documents: 'Petition.pdf, CityOrdinance.pdf',
                          },
                          {
                            case_id: 'CSE005',
                            case_name: 'Lee vs. Brown',
                            type: 'Family',
                            description: 'Custody battle between parents.',
                            lawyer: 'Sarah Johnson',
                            court_name: 'Family Court',
                            location: 'Miami, FL',
                            start_date: '2022-09-01',
                            status: 'Completed',
                            no_of_hearings: 8,
                            end_date: '2023-04-10',
                            documents: 'CustodyAgreement.pdf, CourtOrder.docx',
                          },
                          {
                            case_id: 'CSE006',
                            case_name: 'Garcia vs. Tech Innovations Inc.',
                            type: 'Employment',
                            description: 'Unlawful termination case.',
                            lawyer: 'David Martinez',
                            court_name: 'Employment Tribunal',
                            location: 'San Francisco, CA',
                            start_date: '2023-02-14',
                            status: 'In-Progress',
                            no_of_hearings: 6,
                            end_date: '',
                            documents: 'TerminationLetter.pdf, HREmails.docx',
                          },
                          {
                            case_id: 'CSE007',
                            case_name: 'Peterson vs. Healthcare Ltd.',
                            type: 'Medical Negligence',
                            description: 'Lawsuit over alleged malpractice.',
                            lawyer: 'Karen Lee',
                            court_name: 'High Court',
                            location: 'Seattle, WA',
                            start_date: '2023-04-25',
                            status: 'Rejected',
                            no_of_hearings: 4,
                            end_date: '2023-07-19',
                            documents: 'MedicalReport.pdf, RejectionNotice.docx',
                          },
                          {
                            case_id: 'CSE008',
                            case_name: 'Nguyen vs. Real Estate Co.',
                            type: 'Property',
                            description: 'Dispute over land ownership and zoning.',
                            lawyer: 'Linda Scott',
                            court_name: 'Property Tribunal',
                            location: 'Dallas, TX',
                            start_date: '2023-06-05',
                            status: 'In-Progress',
                            no_of_hearings: 2,
                            end_date: '',
                            documents: 'LandTitle.pdf, ZoningMap.png',
                          }
                          ,
                          {
                            case_id: 'CSE008',
                            case_name: 'Nguyen vs. Real Estate Co.',
                            type: 'Property',
                            description: 'Dispute over land ownership and zoning.',
                            lawyer: 'Linda Scott',
                            court_name: 'Property Tribunal',
                            location: 'Dallas, TX',
                            start_date: '2023-06-05',
                            status: 'In-Progress',
                            no_of_hearings: 2,
                            end_date: '',
                            documents: 'LandTitle.pdf, ZoningMap.png',
                          }
                          ,
                          {
                            case_id: 'CSE008',
                            case_name: 'Nguyen vs. Real Estate Co.',
                            type: 'Property',
                            description: 'Dispute over land ownership and zoning.',
                            lawyer: 'Linda Scott',
                            court_name: 'Property Tribunal',
                            location: 'Dallas, TX',
                            start_date: '2023-06-05',
                            status: 'In-Progress',
                            no_of_hearings: 2,
                            end_date: '',
                            documents: 'LandTitle.pdf, ZoningMap.png',
                          }
                          ,
                          {
                            case_id: 'CSE008',
                            case_name: 'Nguyen vs. Real Estate Co.',
                            type: 'Property',
                            description: 'Dispute over land ownership and zoning.',
                            lawyer: 'Linda Scott',
                            court_name: 'Property Tribunal',
                            location: 'Dallas, TX',
                            start_date: '2023-06-05',
                            status: 'In-Progress',
                            no_of_hearings: 2,
                            end_date: '',
                            documents: 'LandTitle.pdf, ZoningMap.png',
                          },
                          
        ];

        this.statuses = [
            { label: 'Completed', value: 'Completed' },
            { label: 'In-Progress', value: 'In-Progress' },
            { label: 'Rejected', value: 'Rejected' }
        ];
    }

    showDialog() {
        this.newCase = {
            case_id: '',
            case_name: '',
            type: '',
            description: '',
            lawyer: '',
            court_name: '',
            location: '',
            start_date: '',
            status: 'In-Progress',
            no_of_hearings: 0,
            end_date: '',
            documents: '',
        };
        this.display = true;
    }

    clear(table: Table) {
      table.clear();
  }
    saveProduct() {
        if (this.newCase.case_name) {
            // Generate a new case_id
            const newCaseId = `CSE${(this.products.length + 1).toString().padStart(3, '0')}`;
            this.newCase.case_id = newCaseId;

            // Add the new product to the list
            this.products = [...this.products, { ...this.newCase }];

            // Show success message
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Case added successfully!' });

            // Reset the form and hide the dialog
            this.resetForm();
            this.display = false;
        } else {
            // Show error message or handle validation
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all required fields!' });
        }
    }

    resetForm() {
        this.newCase = {} as Product;
    }

    onRowEditInit(product: Product) {
        // implementation
    }

    onRowEditSave(product: Product) {
        // implementation
    }

    onRowEditCancel(product: Product, index: number) {
        // implementation
    }
}
