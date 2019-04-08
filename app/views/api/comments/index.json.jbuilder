json.array! @comments do |comment|
  json.partial! 'api/shared/comment', comment: comment
end
