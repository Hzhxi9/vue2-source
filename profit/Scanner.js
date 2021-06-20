export default class Scanner {
  constructor(template) {
    this.pos = 0;
    this.template = template;
    this.tail = template;
  }

  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      this.pos += this.tag.length;
      this.tail += this.template.substring(this.pos);
    }
  }

  scanUtil(stopTag) {
    const pos_backup = this.pos;
    while (!this.eos() && this.tail.indexOf(stopTag) !== 0) {
      this.pos++;
      this.tail = this.template.substring(this.pos);
    }

    return this.template.substring(pos_backup, this.pos);
  }

  eos() {
    return this.pos >= this.template.length;
  }
}
