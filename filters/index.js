import utils from '../utils/utils'
import config from '../utils/config'


export default {
  dictMapping(value, key, connector) {
    let dict = config.getDict(key);
    if (!dict || utils.isNull(value)) return '';
    if (connector) {
      value = value.split(connector);
    }
    if (!utils.isNull(value) && value !== '' && key) {
      if(!utils.isArray(value)){
        value = [value];
      }
    }
    if (value.length <= 0) {
      return '';
    }

    const keyField = config.getOption('dict', 'key_field');
    const titleField = config.getOption('dict', 'title_field');

    if (utils.isArray(dict)) {
      dict = utils.toObject(dict, keyField);
    }
    return value.map((ele) => {
      const d = dict[ele];
      if (utils.isObject(d)) {
        return d[titleField];
      }
      return d;
    }).filter(ele => (ele && ele !== '')).join(', ');
  }
}
