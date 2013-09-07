require 'test_helper'

class FormCellTest < Cell::TestCase
  test "form_row" do
    invoke :form_row
    assert_select "p"
  end
  

end
