import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  addForm: FormGroup;
  itemForm: FormGroup;
  productData = [];

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      rows: this.fb.array([]),
    });
  }
  ngAfterViewInit(): void {
    this.addForm.valueChanges.subscribe((res) => {
      res.rows.forEach((data) => {
        data.subTotal = data.qty * data.price;
      });
      this.addForm.patchValue(
        {
          rows: res.rows,
        },
        { onlySelf: true, emitEvent: false }
      );
      localStorage.setItem('data', JSON.stringify(res.rows));
    });
  }

  ngOnInit() {
    this.productData = JSON.parse(localStorage.getItem('data'));
    if (this.productData) {
      this.productData.forEach((data) => {
        this.addProductFields(
          data.id,
          data.name,
          data.description,
          data.qty,
          data.price,
          data.subTotal
        );
      });
    } else {
      this.addProductFields();
    }
  }

  get rows(): FormArray {
    return this.addForm.get('rows') as FormArray;
  }

  onAddRow() {
    if (this.rows.controls.length == 0) {
      this.addProductFields();
    } else if (this.rows.status == 'VALID') {
      this.addProductFields();
    } else {
      Swal.fire('Please fill all the fields');
    }
  }

  addProductFields(
    id = new Date().getMilliseconds(),
    name = null,
    description = null,
    qty = null,
    price = null,
    subTotal = null
  ) {
    this.rows.push(
      this.fb.group({
        id: [id, Validators.required],
        name: [name, Validators.required],
        description: [description, Validators.required],
        qty: [qty, Validators.required],
        price: [price, Validators.required],
        subTotal: [subTotal, Validators.required],
      })
    );
  }

  onRemoveRow(row: any, rowIndex: number) {
    this.rows.removeAt(rowIndex);
    localStorage.setItem('data', JSON.stringify(this.rows));
  }
}
