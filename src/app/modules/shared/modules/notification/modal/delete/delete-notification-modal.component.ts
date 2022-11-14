/********************************************************************************
 * Copyright (c) 2021,2022 Contributors to the CatenaX (ng) GitHub Organisation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Notification } from '@shared/model/notification.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvestigationsFacade } from '@page/investigations/core/investigations.facade';
import { CtaSnackbarService } from '@shared/components/call-to-action-snackbar/cta-snackbar.service';
import { ModalService } from '@shared/modules/modal/core/modal.service';
import { ConfirmModalData } from '@shared/modules/modal/core/modal.model';

@Component({
  selector: 'app-delete-notification-modal',
  templateUrl: './delete-notification-modal.component.html',
  styleUrls: ['./delete-notification-modal.component.scss'],
})
export class DeleteNotificationModalComponent implements OnInit {
  @ViewChild('Modal') modal: TemplateRef<unknown>;
  @Input() notification: Notification;

  public readonly formGroup;
  private readonly textAreaControl = new FormControl();

  constructor(
    private readonly investigationsFacade: InvestigationsFacade,
    private readonly ctaSnackbarService: CtaSnackbarService,
    private readonly confirmModalService: ModalService,
  ) {
    this.formGroup = new FormGroup({ notificationId: this.textAreaControl });
  }

  ngOnInit(): void {}

  public show(notification: any): void {
    this.notification = notification;
    this.textAreaControl.setValidators([Validators.required, Validators.pattern(this.notification.id.toString())]);
    const onConfirm = (isConfirmed: boolean) => console.log(isConfirmed);

    const options: ConfirmModalData = {
      title: 'commonInvestigation.modal.deletionTitle',
      confirmText: 'commonInvestigation.modal.confirm',
      cancelText: 'commonInvestigation.modal.cancel',

      template: this.modal,
      formGroup: this.formGroup,
      onConfirm,
    };

    this.confirmModalService.open(options);
  }
}
