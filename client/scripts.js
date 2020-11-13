$(document).ready(function () {

  function validate(move) {
    return move === 'n' || move === 's' || move === 'e' || move === 'w';
  }

  async function renderResultText() {
    let text = await getQuestResult();
    $('#result').text(text);
  }

  function getQuestResult(movements) {
    let moves = movements || $('#movements').val().toLowerCase();

    if (!moves.split('').every(validate)) {
      return 'Invalid input!';
    }

    let result;
    try {
      result = $.ajax({
        url: 'http://localhost:4000/quest',
        type: 'GET',
        data: { moves },
      });
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  $('button').click(function () {
    renderResultText();
  });
});

module.exports = getQuestResult;
