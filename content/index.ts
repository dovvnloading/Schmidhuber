import { FOUNDATIONS_EVENTS } from './foundations';
import { BIRTH_OF_DL_EVENTS } from './birth_of_dl';
import { GOLDEN_AGE_EVENTS } from './golden_age';
import { MODERN_FUTURE_EVENTS } from './modern_future';
import { TimelineEvent } from '../types';

export const HISTORY_DATA: TimelineEvent[] = [
  ...FOUNDATIONS_EVENTS,
  ...BIRTH_OF_DL_EVENTS,
  ...GOLDEN_AGE_EVENTS,
  ...MODERN_FUTURE_EVENTS
];
