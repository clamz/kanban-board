require 'test_helper'
require 'project'
require 'projectsUser'
class UserTest < ActiveSupport::TestCase
  	test "should not save user without email and password" do
	  user = User.new
	  assert !user.save, "Saved the user without an email and password"
	end

	test "should not save user without email" do
	  user = User.new
	  user.password = 'dede'
	  assert !user.save, "Saved the user without an email"
	end

	test "should not save user without password" do
	  user = User.new
	  user.email = 'dede'
	  assert !user.save, "Saved the user without an password"
	end

	test "should not save user with an invalid email" do
	  user = User.new
	  user.email = 'dede'

	  user.password = 'dedfefee'
	  assert !user.save, "Saved the user with an invalid email"
	end

	test "Save an user with email and password" do
	  user = User.new
	  user.email = 'dede@dede.fr'

	  user.password = 'dedfefee'
	  assert user.save, "Save an user with email and password"
	end

	test "Add a project to user" do
		user = User.find_by_email("user1@email.com")
		project = Project.find_by_name('project1')
		user.projects << project

		assert user.save, "Add a project to user"
	end
end
