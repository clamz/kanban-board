require 'test_helper'
require 'project'
require 'projectsUser'
require 'user'
class ProjectsUserTest < ActiveSupport::TestCase
  	test "should have READER role by default" do
	  project = Project.find_by_name('project1')
      user = User.find_by_email("user1@email.com")
      user.projects << project
      projectsUser = user.projectsUser
	  assert user.save, "Saved the project without a name"
	end

    test "The role ADMIN should not a valid role" do
      project = Project.find_by_name('project1')
      user = User.find_by_email("user1@email.com")
      user.projects << project
      assert user.save, "the user can be save"
      projectsUser = user.projectsUser
      
      
      projectsUser[0].role = "ADMIN"
      assert !projectsUser[0].save, "The role ADMIN should not a valid role"
    end

	
end
