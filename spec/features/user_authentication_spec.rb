require 'rails_helper'

feature 'sign up/sign in' do
  let(:user) { FactoryGirl.create(:user) }

  scenario 'user signs up successfully' do
    visit '/'
    click_link 'Sign up'
    fill_in 'Username', with: 'User'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    click_button 'Sign up'

    expect(page).to have_content('Log in')
  end

  scenario 'user signs in successfully' do
    visit '/'
    fill_in 'Username', with: user.username
    fill_in 'Password', with: user.password
    click_button 'Log in'

    expect(page).to have_content('Sign Out')
  end

  scenario 'user signs up unsuccessfully' do
    visit '/'
    click_link 'Sign up'
    click_button 'Sign up'

    expect(page).to have_content('Username can\'t be blank')
    expect(page).to have_content('Password can\'t be blank')
    expect(page).to have_content('Password confirmation can\'t be blank')
  end

  scenario 'user signs in unsuccessfully' do
    visit '/'
    fill_in 'Username', with: user.username
    fill_in 'Password', with: 'something else'
    click_button 'Log in'

    expect(page).to have_content('Log in')
    expect(page).to have_content('Username')
  end

  scenario 'user signs out' do
    visit '/'
    fill_in 'Username', with: user.username
    fill_in 'Password', with: user.password
    click_button 'Log in'
    click_link 'Sign Out'

    expect(page).to have_content('Log in')
    expect(page).to have_content('Username')
  end
end
