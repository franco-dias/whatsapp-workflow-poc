import { container } from 'tsyringe';

import { BullQueueProvider } from './implementations/BullQueueProvider';
import { IQueueProvider } from './IQueueProvider';

container.registerSingleton<IQueueProvider>('QueueProvider', BullQueueProvider);
