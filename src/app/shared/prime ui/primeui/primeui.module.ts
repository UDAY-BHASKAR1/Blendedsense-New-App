import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SpeedDialModule} from 'primeng/speeddial';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule} from 'primeng/avatar';
import { AvatarGroupModule} from 'primeng/avatargroup';
import { InputTextModule} from 'primeng/inputtext';
import { DialogModule} from 'primeng/dialog';
import { TableModule} from 'primeng/table';
import { ConfirmPopupModule} from 'primeng/confirmpopup';
import { ToastModule} from 'primeng/toast';
import { MenuModule} from 'primeng/menu';
import { MenubarModule} from 'primeng/menubar';
import { DropdownModule} from 'primeng/dropdown';
import { OverlayModule } from 'primeng/overlay';
import { OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  declarations: [],
  exports: [CommonModule,
    ButtonModule,
    SpeedDialModule,
    StyleClassModule,
    RippleModule,
    AvatarModule,
    AvatarGroupModule,
    InputTextModule,
    DialogModule,
    TableModule,
    ConfirmPopupModule,
    ToastModule,
    MenuModule,
    MenubarModule,
    DropdownModule,
    OverlayModule,
    OverlayPanelModule
  ]
})
export class PrimeuiModule { }
