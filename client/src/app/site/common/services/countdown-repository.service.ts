import { Injectable } from '@angular/core';
import { DataSendService } from '../../../core/services/data-send.service';
import { DataStoreService } from '../../../core/services/data-store.service';
import { BaseRepository } from '../../base/base-repository';
import { Identifiable } from '../../../shared/models/base/identifiable';
import { CollectionStringModelMapperService } from '../../../core/services/collectionStringModelMapper.service';
import { ViewCountdown } from '../models/view-countdown';
import { Countdown } from '../../../shared/models/core/countdown';

@Injectable({
    providedIn: 'root'
})
export class CountdownRepositoryService extends BaseRepository<ViewCountdown, Countdown> {
    public constructor(
        DS: DataStoreService,
        mapperService: CollectionStringModelMapperService,
        private dataSend: DataSendService
    ) {
        super(DS, mapperService, Countdown);
    }

    protected createViewModel(countdown: Countdown): ViewCountdown {
        return new ViewCountdown(countdown);
    }

    public async create(countdown: Countdown): Promise<Identifiable> {
        return await this.dataSend.createModel(countdown);
    }

    public async update(countdown: Partial<Countdown>, viewCountdown: ViewCountdown): Promise<void> {
        const update = viewCountdown.countdown;
        update.patchValues(countdown);
        await this.dataSend.updateModel(update);
    }

    public async delete(viewCountdown: ViewCountdown): Promise<void> {
        await this.dataSend.deleteModel(viewCountdown.countdown);
    }
}
