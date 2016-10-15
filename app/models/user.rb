class User < ActiveRecord::Base
  has_many :entries

  validates_presence_of :username
  validates_presence_of :password
  validates_presence_of :password_confirmation

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :authentication_keys => [:username]

  def email_required?
    false
  end

  def email_changed?
    false
  end
end
