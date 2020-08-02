class Host < ApplicationRecord
    has_many :lodgings
    has_many :users, through: :lodgings
end
