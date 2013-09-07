require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  	test "should not save project without name" do
	  project = Project.new
	  assert !project.save, "Saved the project without a name"
	end

	test "should  save project with name" do
	  project = Project.new
	  project.name = "test"
	  assert project.save, "Saved the project with a name"
	end

	test "should don't save two project with same name" do
	  project = Project.new
	  project.name = "test"
	  assert project.save, "The first project should can be save"
	  project2 = Project.new
	  project2.name = "test"
	  assert !project2.save, "Two project with the same name"
	end

	test "should find project by name" do
	  
	  assert Project.find_by_name("project1"), "The project \"project1\" was not found"
	 
	end
end
