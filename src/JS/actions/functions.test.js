import { sendContactForm, addPost, updateProfile } from './Actions';

describe('Test sendContactForm function', () => {
  it('should return object to send contact form', () => {
    expect(sendContactForm('test@test', 'testTopic', 'testBlogName', 'testMsg')).toEqual(console.log({ email: 'test@test', topic: 'testTopic', blogName: 'testBlogName', mesasge: 'testMsg' }))
  })
  it('should return alert', () => {
    expect(sendContactForm('test@test', null, 'testBlogName', 'testMsg')).toEqual(alert('Check all fields'))
  })
})

describe('Test addPost function', () => {
  it('should return post object', () => {
    expect(addPost('testBlog', 'testTitle', 'testIMG', 'testTxt', 'tag1, tag2, tag3', 123)).toEqual(console.log({ blog:'testblog', title: 'testTitle', image: 'testIMG', text: 'testTxt', tags: 'tag1, tag2, tag3', author_id: 123 }))
  })
  it('should return post object without img', () => {
    expect(addPost('testBlog', 'testTitle', null, 'testTxt', 'tag1, tag2, tag3', 123)).toEqual(console.log({ blog:'testblog', title: 'testTitle', image: null, text: 'testTxt', tags: 'tag1, tag2, tag3', author_id: 123 }))
  })
  it('should return alert', () => {
    expect(addPost(null, 'testTitle', null, 'testTxt', 'tag1, tag2, tag3', 123)).toEqual(alert('Check all fields'))
  })
})

describe('Test updateProfil function', () => {
  it('should return updated user object', () => {
    expect(updateProfile('testFirstName', 'testLastName', '1.1.1111', 123123123, 'testDiscord', 'testTweeter', 'testLinkedIn', 'testGitHub')).toEqual(console.log({ firstName: 'testFirstName', lastName: 'testLastName', dateOfBirth: '1.1.1111', phone: 123123123, discord: 'testDiscord', tweeter: 'testTweeter', linkedIn: 'testLinkedIn', gitHub: 'testGitHub' }))
  })
})