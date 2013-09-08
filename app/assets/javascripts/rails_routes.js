
  function projects_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/projects?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/projects'
    }else {
      var params = options;
      return '/projects'
    }
  }

  function new_project_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/projects/new?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/projects/new'
    }else {
      var params = options;
      return '/projects/new'
    }
  }

  function edit_project_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/projects/' + params.id + '/edit?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/projects/' + params.id + '/edit'
    }else {
      var params = options;
      return '/projects/' + params.id + '/edit'
    }
  }

  function project_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/projects/' + params.id + '?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/projects/' + params.id + ''
    }else {
      var params = options;
      return '/projects/' + params.id + ''
    }
  }

  function new_user_session_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users/sign_in?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users/sign_in'
    }else {
      var params = options;
      return '/users/sign_in'
    }
  }

  function user_session_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users/sign_in?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users/sign_in'
    }else {
      var params = options;
      return '/users/sign_in'
    }
  }

  function destroy_user_session_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users/sign_out?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users/sign_out'
    }else {
      var params = options;
      return '/users/sign_out'
    }
  }

  function user_password_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users/password?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users/password'
    }else {
      var params = options;
      return '/users/password'
    }
  }

  function new_user_password_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users/password/new?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users/password/new'
    }else {
      var params = options;
      return '/users/password/new'
    }
  }

  function edit_user_password_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users/password/edit?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users/password/edit'
    }else {
      var params = options;
      return '/users/password/edit'
    }
  }

  function cancel_user_registration_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users/cancel?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users/cancel'
    }else {
      var params = options;
      return '/users/cancel'
    }
  }

  function user_registration_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users'
    }else {
      var params = options;
      return '/users'
    }
  }

  function new_user_registration_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users/sign_up?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users/sign_up'
    }else {
      var params = options;
      return '/users/sign_up'
    }
  }

  function edit_user_registration_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/users/edit?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/users/edit'
    }else {
      var params = options;
      return '/users/edit'
    }
  }

  function root_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/'
    }else {
      var params = options;
      return '/'
    }
  }

  function rails_info_properties_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/rails/info/properties?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/rails/info/properties'
    }else {
      var params = options;
      return '/rails/info/properties'
    }
  }

  function rails_info_routes_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/rails/info/routes?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/rails/info/routes'
    }else {
      var params = options;
      return '/rails/info/routes'
    }
  }

  function rails_info_path(options){
    if(options && options.data) {
      var op_params = []
      for(var key in options.data){
        op_params.push([key, options.data[key]].join('='));
      }
      var params = options.params;
      return '/rails/info?' + op_params.join('&');
    }else if(options && options.params) {
      var params = options.params;
      return '/rails/info'
    }else {
      var params = options;
      return '/rails/info'
    }
  }
