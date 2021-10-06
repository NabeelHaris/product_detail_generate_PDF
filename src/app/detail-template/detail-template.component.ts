import jsPDF from 'jspdf';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detail-template',
  templateUrl: './detail-template.component.html',
  styleUrls: ['./detail-template.component.scss'],
})
export class DetailTemplateComponent implements OnInit {
  productData = [];
  addForm: FormGroup;
  itemForm: FormGroup;
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      rows: this.fb.array([]),
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
    }
  }

  get rows(): FormArray {
    return this.addForm.get('rows') as FormArray;
  }

  addProductFields(
    id = new Date().getMilliseconds(),
    name = null,
    description = null,
    qty = null,
    price = null,
    subTotal = null,
    remarks = null
  ) {
    this.rows.push(
      this.fb.group({
        id: [id, Validators.required],
        name: [name, Validators.required],
        description: [description, Validators.required],
        qty: [qty, Validators.required],
        price: [price, Validators.required],
        subTotal: [subTotal, Validators.required],
        remarks: [remarks],
      })
    );
  }
  generatePDF() {
    let data = document.getElementById('pdfTable');
    html2canvas(data).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210;
      var pageHeight = 300;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'mm');
      var position = 10;
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position += heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save('file.pdf');
    });
  }
}
