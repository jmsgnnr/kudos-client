curl "https://frozen-shore-45480.herokuapp.com/kudos/${ID}"\
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "user": {
      "name": "'"${NAME}"'",
      "kudos": "'"${KUDOS}"'"
    }
  }'

echo