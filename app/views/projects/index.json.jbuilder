json.array!(@projects) do |project|
  json.extract! project, :name, :users_id
  json.url project_url(project, format: :json)
end
