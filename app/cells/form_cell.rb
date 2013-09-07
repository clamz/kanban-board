class FormCell < Cell::Rails

  def form_row(args)
    @name = args[:name]
    @f = args[:field]
    render
  end

end
