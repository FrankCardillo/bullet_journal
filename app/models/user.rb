class User < ActiveRecord::Base
  has_many :pages

  validates_presence_of :username

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :authentication_keys => [:username]
end
