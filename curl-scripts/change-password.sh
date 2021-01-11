curl "http://localhost:4741/" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"\
    --data '{
        "passwords":{
    "old" : "'"${OLDPW}"'",
    "new" : "'"${NEWPW}"'"
    }
}'
