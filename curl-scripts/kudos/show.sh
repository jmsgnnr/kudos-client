curl "https://frozen-shore-45480.herokuapp.com/kudos/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \