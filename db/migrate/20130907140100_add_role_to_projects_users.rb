class AddRoleToProjectsUsers < ActiveRecord::Migration
  def change
    add_column :projects_users, :role, :string, :null => false, :default => 'READER'
  end
end
