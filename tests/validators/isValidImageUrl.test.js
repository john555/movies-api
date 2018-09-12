const { expect } = require('chai');
const isValidImageUrl = require('../../src/validators/isValidImageUrl');
describe('validators/isValidImageUrl', () => {
  it('should return true for valid PNG and JPG URLs', () => {
    expect(isValidImageUrl('http://mms.cc/k/sah8a.png')).to.equal(true);
    expect(isValidImageUrl('http://mms.cc/k/sah8a.jpg')).to.equal(true);
    expect(isValidImageUrl('/sah8a.jpg')).to.equal(true);
  });

  it('should return false for non-image URLs', () => {
    expect(isValidImageUrl('')).to.equal(false);
    expect(isValidImageUrl('http://mms.cc/k/sah8a')).to.equal(false);
    expect(isValidImageUrl('http://mms.cc/k/sah8a.pdf')).to.equal(false);
  });
});
