import { createDuration } from 'ation/create';
import { createLocal } from 'ate/local';
import { isMoment } from 'ent/constructor';

export function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

export function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}
